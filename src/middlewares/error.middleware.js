export function errorHandler(error, req, res, next) {
  console.error(error);

  // JSON inválido enviado pelo cliente
  if (error.type === "entity.parse.failed") {
    return res.status(400).json({
      error: {
        code: "INVALID_JSON",
        message: "JSON inválido",
      },
    });
  }

  // Erros conhecidos da aplicação
  if (error.statusCode) {
    return res.status(error.statusCode).json({
      error: {
        code: error.code,
        message: error.message,
      },
    });
  }

  // Erros inesperados
  return res.status(500).json({
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: "Internal server error",
    },
  });
}