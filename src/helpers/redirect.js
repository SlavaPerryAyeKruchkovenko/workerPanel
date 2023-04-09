import apiManager from "@Helpers/apiManager";

const redirect = {
    redirect: (navigate, token, currentRoleId = 0) => {
        if (token) {
            apiManager.currentUser(token).then(value => {
                if (value.data) {
                    const user = value.data;
                    switch (user.role_id) {
                        case 1:
                            user.role_id !== currentRoleId ? navigate("/admin/upload") : '';
                            break;
                        case 2:
                            user.role_id !== currentRoleId ? navigate("/checkpoint") : '';
                            break;
                        case 3:
                            user.role_id !== currentRoleId ? navigate("/storage") : '';
                            break;
                    }
                } else {
                    navigate("/login");
                }
            })
        } else {
            navigate("/login");
        }
    }
}
export default redirect;