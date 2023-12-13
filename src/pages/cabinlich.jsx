import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ProfileInfo from "../components/cabinet";

const ProfileP = () => {
    return (
        <div>
            <Header />
            <h2 className="text-center text-white bg-danger m-2">Личный кабинет</h2>
            <pre></pre>
            <ProfileInfo />
            <h2 className="text-center text-white bg-danger m-2">Объявления пользователя</h2>
            <pre></pre>

            <Footer />
        </div>
    );
};
export default ProfileP;
