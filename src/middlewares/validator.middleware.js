export const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        let errors = error.errors;

        if (!errors && typeof error.message === 'string') {
            try {
                errors = JSON.parse(error.message);
            } catch {
                errors = [];
            }
        }

        if (Array.isArray(errors)) {
            const mensajesPorCampo = {};

            errors.forEach((err) => {
                const campo = err.path[0];
                if (!mensajesPorCampo[campo]) {
                    switch (campo) {
                        // Campos de usuario
                        case 'username':
                            mensajesPorCampo[campo] = err.message || 'Username is required';
                            break;
                        case 'email':
                            if (err.code === 'invalid_format') {
                                mensajesPorCampo[campo] = 'Email is not valid';
                            } else {
                                mensajesPorCampo[campo] = err.message || 'Email is required';
                            }
                            break;
                        case 'password':
                            mensajesPorCampo[campo] = err.message || 'Password is required';
                            break;

                        // Campos de tarea
                        case 'title':
                            mensajesPorCampo[campo] = 'Title is required' || err.message;
                            break;
                        case 'description':
                            mensajesPorCampo[campo] = 'Description is required' || err.message;
                            break;
                        case 'date':
                            if (err.code === 'invalid_string') {
                                mensajesPorCampo[campo] = 'Date must be a valid ISO string';
                            } else {
                                mensajesPorCampo[campo] = err.message || 'Invalid date format';
                            }
                            break;

                        default:
                            mensajesPorCampo[campo] = 'Task ' + campo;
                    }
                }
            });

            return res.status(400).json({
                error: Object.values(mensajesPorCampo),
            });
        } else {
            return res.status(400).json({
                error: [error.message || 'Solicitud inválida'],
            });
        }
    }
};