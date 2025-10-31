import Experience from "../models/Experience.js";

export async function getExperiences(req, res) {
  const list = await Experience.find({});
  res.json(list);
}

export async function getExperience(req, res) {
  const exp = await Experience.findById(req.params.id);
  res.json(exp);
}