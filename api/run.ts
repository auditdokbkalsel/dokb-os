import { VercelRequest, VercelResponse } from "@vercel/node";
import { Workflow } from "../core/workflow";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id, title, payload } = req.body;

  if (!id || !title || !payload) {
    return res.status(400).json({ error: "id, title, payload wajib diisi" });
  }

  try {
    await Workflow.run({
      id,
      title,
      payload,
      stage: "blueprint",
    });

    return res.status(200).json({
      success: true,
      message: `Workflow "${title}" selesai!`,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: String(error),
    });
  }
}
