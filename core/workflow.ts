import { AgentRouter } from "./router";

export class DOKBWorkflow {
  private currentStep: "ARCHITECTURE" | "IMPLEMENTATION" | "QA" | "DONE" = "ARCHITECTURE";

  async executeSequence(founderVision: string) {
    console.log(`\n🎬 [Workflow]: Memulai Alur Kerja DOKB-OS v1.0`);
    console.log(`🎯 Visi Founder: "${founderVision}"\n`);

    // Langkah 1: Arsitektur (Chatty)
    const task1 = AgentRouter.route({
      id: "t1",
      payload: founderVision,
      targetRole: "architect",
      sender: "Founder (Jani)",
    });
    const blueprint = `[Cetak Biru Desain Sistem untuk: ${task1.payload}]`;
    console.log(`-> Hasil Kerja Arsitektur Selesai.\n`);
    this.currentStep = "IMPLEMENTATION";

    // Langkah 2: Implementasi (Gemmy)
    const task2 = AgentRouter.route({
      id: "t2",
      payload: blueprint,
      targetRole: "engineer",
      sender: "Chatty",
    });
    const sourceCode = `[Source Code Bersih & Type Safety berdasarkan ${task2.payload}]`;
    console.log(`-> Hasil Kerja Kode Program Selesai.\n`);
    this.currentStep = "QA";

    // Langkah 3: Quality Assurance (Claudia)
    const task3 = AgentRouter.route({
      id: "t3",
      payload: sourceCode,
      targetRole: "qa",
      sender: "Gemmy",
    });
    const qaReport = `[Laporan Review Claudia: Kode 100% Sesuai Standar & Aman]`;
    console.log(`-> Hasil Audit QA Selesai.\n`);
    this.currentStep = "DONE";

    return {
      blueprint,
      sourceCode,
      qaReport,
    };
  }
}
