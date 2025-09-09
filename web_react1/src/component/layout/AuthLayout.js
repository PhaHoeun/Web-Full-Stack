
import { Outlet } from "react-router-dom";
const AuthLayout = () => { //Outlet is property
    return (
        <div >
            {/* <div style={{ height: 60, backgroundColor: 'pink' }}>
                <div>Main Layout</div>
            </div>
            <button>
                Click Me
            </button> */}
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;