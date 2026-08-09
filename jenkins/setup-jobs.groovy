// Crear jobs CI + CD en Jenkins (ejecutar UNA vez)
//
// Jenkins → Manage Jenkins → Script Console → pegar y Run
//
// Requisitos: plugin Git + Pipeline. Credenciales npm/netlify/github aparte.

import jenkins.model.Jenkins
import org.jenkinsci.plugins.workflow.job.WorkflowJob
import org.jenkinsci.plugins.workflow.cps.CpsScmFlowDefinition
import hudson.plugins.git.BranchSpec
import hudson.plugins.git.GitSCM
import hudson.plugins.git.UserRemoteConfig
import hudson.triggers.SCMTrigger
import hudson.tasks.BuildTrigger

def jenkins = Jenkins.instance
def repoUrl = "git@github.com:LIFETRACK-PLATFORM/lifetrack-system-design.git"
def branch = "*/develop"

def createOrUpdateJob(String name, String scriptPath) {
  def job = jenkins.getItem(name) as WorkflowJob
  if (job == null) {
    job = jenkins.createProject(WorkflowJob.class, name)
    println "✓ Creado job: ${name}"
  } else {
    println "↻ Job ya existe, actualizando: ${name}"
  }

  def scm = new GitSCM(
    [new UserRemoteConfig(repoUrl, "origin", null, null)] as List,
    [new BranchSpec(branch)] as List,
    false,
    [] as List,
    null,
    null,
    [] as List
  )

  job.definition = new CpsScmFlowDefinition(scm, scriptPath)
  job.save()
  return job
}

// Job 1 — CI
def ciJob = createOrUpdateJob("lifetrack-system-design", "Jenkinsfile")
ciJob.removeTrigger(SCMTrigger.class)
ciJob.addTrigger(new SCMTrigger("* * * * *")) // poll cada minuto; cambiar por webhook si preferís

// Job 2 — CD (corre después del CI)
def cdJob = createOrUpdateJob("lifetrack-system-design-cd", "Jenkinsfile.cd")
cdJob.removeTrigger(BuildTrigger.class)
cdJob.addTrigger(new BuildTrigger("lifetrack-system-design", true)) // solo si CI = SUCCESS

jenkins.reload()
println ""
println "Listo. Verificá en Jenkins:"
println "  - lifetrack-system-design     (CI,  Jenkinsfile)"
println "  - lifetrack-system-design-cd  (CD,  Jenkinsfile.cd)"
println ""
println "Faltan las Credentials:"
println "  - npm-publish-token"
println "  - netlify-auth-token"
println "  - netlify-site-id"
println "  - github-token-userpass"
