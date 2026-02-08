const Project = require("../models/Project");

// CREATE PROJECT
const createProject = async (req,res)=>{
 try{
  const project = await Project.create(req.body);
  res.json(project);
 }catch(err){
  res.status(500).json(err.message);
 }
};

// GET ALL PROJECTS
const getProjects = async (req,res)=>{
 try{
  const projects = await Project.find();
  res.json(projects);
 }catch(err){
  res.status(500).json(err.message);
 }
};

// GET PROJECT BY ID
const getProjectById = async (req,res)=>{
 try{
  const project = await Project.findById(req.params.id);
  res.json(project);
 }catch(err){
  res.status(500).json(err.message);
 }
};

// UPDATE PROJECT
const updateProject = async (req,res)=>{
 try{
  const project = await Project.findByIdAndUpdate(
   req.params.id,
   req.body,
   { new:true }
  );
  res.json(project);
 }catch(err){
  res.status(500).json(err.message);
 }
};

// DELETE PROJECT
const deleteProject = async (req,res)=>{
 try{
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message:"Project deleted" });
 }catch(err){
  res.status(500).json(err.message);
 }
};

// ASSIGN USERS
const assignUsers = async (req,res)=>{
 try{
  const { users } = req.body;

  const project = await Project.findByIdAndUpdate(
   req.params.id,
   { assignedUsers: users },
   { new: true }
  );

  res.json(project);
 }catch(err){
  res.status(500).json(err.message);
 }
};
const markCompleted = async (req,res)=>{
 try{
  const project = await Project.findByIdAndUpdate(
   req.params.id,
   { status:"completed" },
   { new:true }
  );

  res.json(project);
 }catch(err){
  res.status(500).json(err.message);
 }
};
const uploadDocument = async (req,res)=>{
 try{
  const project = await Project.findByIdAndUpdate(
   req.params.id,
   { $push:{ documents:req.file.path } },
   { new:true }
  );

  res.json(project);
 }catch(err){
  res.status(500).json(err.message);
 }
};

 const getStats = async (req,res)=>{
 try{

  const total = await Project.countDocuments();
  const completed = await Project.countDocuments({ status: "completed" });
  const pending = await Project.countDocuments({ status: "pending" });

  res.json({
   total,
   completed,
   pending
  });

 }catch(err){
  res.status(500).json({ message: err.message });
 }
};

module.exports = {
 createProject,
 getProjects,
 getProjectById,
 updateProject,
 deleteProject,
 assignUsers,
 markCompleted,
 uploadDocument,
getStats
};