import { Workflow } from "./core/workflow";

async function main() {
  console.log("🤖 DOKB-OS — AI Orchestration System");
  console.log("=====================================\n");

  await Workflow.run({
    id: "task-001",
    title: "Contoh Task Pertama",
    payload: "Buat sistem manajemen anggota DOKB",
    stage: "blueprint",
  });
}

main().catch(console.error);
