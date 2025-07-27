import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.json({ success: false, message: "Not Authorized" });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (tokenDecode.id) {
            req.body = req.body || {};       // 🔧 ADDED LINE: Ensure req.body is not undefined
            req.body.userId = tokenDecode.id; // 🔧 FIXED LINE: Now safe to assign
        } else {
            return res.json({ success: false, message: "Not Authorized" });
        }

        next();
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export default authUser;
