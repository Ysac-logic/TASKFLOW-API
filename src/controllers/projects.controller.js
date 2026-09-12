export function listProjects(req, res) {
  return res.status(200).json({
    data: [],
  });
}

export function getProjectById(req, res) {
  const { id } = req.params;

  return res.status(200).json({
    data: {
      id,
    },
  });
}

export function createProject(req, res) {
  const projectData = req.body;

  return res.status(201).json({
    data: projectData,
  });
}

// export function createProject(req, res, next) {
//   try {
//     throw new Error("Erro interno secreto");

//     return res.status(201).json({
//       data: req.body,
//     });
//   } catch (error) {
//     next(error);
//   }
// }

export function updateProject(req, res) {
  const { id } = req.params;
  const projectData = req.body;

  return res.status(200).json({
    data: {
      id,
      ...projectData,
    },
  });
}

export function deleteProject(req, res) {
  const { id } = req.params;

  return res.status(200).json({
    message: `Projeto ${id} deletado com sucesso`,
  });
}