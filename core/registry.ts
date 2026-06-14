import { Chatty } from "./agents/chatty";
import { Gemmy } from "./agents/gemmy";
import { Claudia } from "./agents/claudia";

export const AgentRegistry = {
  architect: Chatty,
  engineer: Gemmy,
  qa: Claudia,
} as const;

export type AgentRole = keyof typeof AgentRegistry;

export function getAgentByRole(role: AgentRole) {
  return AgentRegistry[role];
}
