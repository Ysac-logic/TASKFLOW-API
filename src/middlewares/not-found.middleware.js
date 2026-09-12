export function notFound(req, res) {
  return res.status(404).json({
    error: {
      code: "ROUTE_NOT_FOUND",
      message: "Route not found",
    },
  });
}