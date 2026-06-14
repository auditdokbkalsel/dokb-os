import { AgentRole, getAgentByRole } from "./registry";

export interface TaskPacket {
  id: string;
  payload: string;
  targetRole: AgentRole;
  sender: string;
}

export const AgentRouter = {
  route(packet: TaskPacket) {
    const agent = getAgentByRole(packet.targetRole);
    console.log(`🔀 [Router]: Mengarahkan tugas dari [${packet.sender}] ke [${agent.nama}]`);
    return {
      ...packet,
      timestamp: new Date().toISOString(),
    };
  }
};
