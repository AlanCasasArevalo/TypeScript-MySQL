import {Router, Response, Request} from "express";
import Mysql from "../mysql/mysql";

const router = Router();

router.get('/heroes', (req: Request, res: Response) => {
    const query = `
        SELECT * FROM heroes
    `;

    Mysql.queryExecute(query, (error: any, heroes: Object[]) => {
        if (error) {
            res.status(400).json({
                ok: false,
                error: error
            })
        } else {
            res.json({
                ok: false,
                heroes
            })
        }
    });
});

router.get('/heroes/:id', (req: Request, res: Response) => {
    const id = req.params.id;

    const escapedID = Mysql.instance.connection.escape(id);

    const query = `
        SELECT * FROM heroes where id = ${ escapedID }
    `;

    Mysql.queryExecute(query, (error: any, heroe: Object[]) => {
        if (error) {
            res.status(400).json({
                ok: false,
                error: error
            })
        } else {
            res.json({
                ok: false,
                heroe: heroe[0]
            })
        }
    });
});

export default router;
















