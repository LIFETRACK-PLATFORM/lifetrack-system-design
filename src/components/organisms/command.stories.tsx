import type { Meta, StoryObj } from "@storybook/react"
import { Calendar, Search, Settings, TrendingUp, User } from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./command"

const meta: Meta<typeof Command> = {
  title: "Organisms/Command",
  component: Command,
}

export default meta

type Story = StoryObj<typeof Command>

export const Default: Story = {
  render: () => (
    <div style={{ width: 350, border: "1px solid #e2e2e2", borderRadius: 8 }}>
      <Command>
        <CommandInput placeholder="Buscar tareas, personas, movimientos..." />
        <CommandList>
          <CommandEmpty>Sin resultados.</CommandEmpty>
          <CommandGroup heading="Sugerencias">
            <CommandItem>
              <Calendar />
              <span>Calendario</span>
            </CommandItem>
            <CommandItem>
              <Search />
              <span>Buscar paciente</span>
            </CommandItem>
            <CommandItem>
              <TrendingUp />
              <span>Finanzas</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Configuración">
            <CommandItem>
              <User />
              <span>Perfil</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Ajustes</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
}
