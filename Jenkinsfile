// CI — igual que auth-service, rehab-service, etc.
// Job Jenkins: Pipeline clásico, rama develop, Script Path: Jenkinsfile

pipeline {
  agent any

  tools {
    nodejs "NodeJS-20"
  }

  stages {
    stage("Install") {
      steps {
        sh '''
          set -e
          corepack enable
          corepack prepare pnpm@10.21.0 --activate
          pnpm --version
          pnpm install --frozen-lockfile
        '''
      }
    }

    stage("Validate") {
      steps {
        sh '''
          set -e
          corepack enable
          pnpm run validate
        '''
      }
    }
  }

  post {
    success {
      echo "Pipeline OK - system-design #${env.BUILD_NUMBER}"
      githubNotify credentialsId: "github-token-userpass", status: "SUCCESS", context: "jenkins-ci", description: "CI passed"
    }
    failure {
      echo "Pipeline FAILED - system-design #${env.BUILD_NUMBER}"
      githubNotify credentialsId: "github-token-userpass", status: "FAILURE", context: "jenkins-ci", description: "CI failed"
    }
  }
}
