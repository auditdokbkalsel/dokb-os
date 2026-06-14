import { AgentRouter, TaskPacket } from "./router";
import { ApprovalGate } from "./approval";
import { AgentRegistry } from "./registry";

export type WorkflowStage =
  | "blueprint"
  | "review_blueprint"
  | "implement"
  | "review_code"
  | "release";

export interface WorkflowTask {
  id: string;
  title: string;
  payload: string;
  stage: WorkflowStage;
}

export const Workflow = {
  async run(task: WorkflowTask) {
    console.log(`\n🚀 [Workflow]: Memulai "${task.title}"\n`);

    // STAGE 1: Chatty buat blueprint
    const blueprintPacket: TaskPacket = {
      id: `${task.id}-blueprint`,
      payload: task.payload,
      targetRole: "architect",
      sender: "Founder",
    };
    AgentRouter.route(blueprintPacket);
    console.log(`📐 [Stage 1]: ${AgentRegistry.architect.nama} mengerjakan blueprint...`);

    // STAGE 2: Claudia review blueprint
    const reviewBlueprintPacket: TaskPacket = {
      id: `${task.id}-review-blueprint`,
      payload: `Review blueprint: ${task.payload}`,
      targetRole: "qa",
      sender: AgentRegistry.architect.nama,
    };
    AgentRouter.route(reviewBlueprintPacket);
    console.log(`🔍 [Stage 2]: ${AgentRegistry.qa.nama} mereview blueprint...`);

    // STAGE 3: Founder approval
    const approval = ApprovalGate.submit(blueprintPacket);
    ApprovalGate.approve(`${task.id}-blueprint`, "Approved by Founder");

    if (approval.status !== "approved") {
      console.log(`🚫 [Workflow]: Dihentikan. Blueprint tidak disetujui.`);
      return;
    }

    // STAGE 4: Gemmy implement
    const implementPacket: TaskPacket = {
      id: `${task.id}-implement`,
      payload: `Implement: ${task.payload}`,
      targetRole: "engineer",
      sender: AgentRegistry.architect.nama,
    };
    AgentRouter.route(implementPacket);
    console.log(`⚙️ [Stage 4]: ${AgentRegistry.engineer.nama} mengimplementasi...`);

    // STAGE 5: Claudia review code
    const reviewCodePacket: TaskPacket = {
      id: `${task.id}-review-code`,
      payload: `Review implementasi: ${task.payload}`,
      targetRole: "qa",
      sender: AgentRegistry.engineer.nama,
    };
    AgentRouter.route(reviewCodePacket);
    console.log(`🔍 [Stage 5]: ${AgentRegistry.qa.nama} mereview code...`);

    console.log(`\n✅ [Workflow]: "${task.title}" selesai & siap release!\n`);
  }
};
