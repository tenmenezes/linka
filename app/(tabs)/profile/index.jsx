import { Redirect } from "expo-router";
import { useAuth } from "@/context/AuthContext";

const user = {
    tipo: "aluno"
};

export default function ProfileIndex() {
    
    const { user } = useAuth();

    if (user.tipo === "aluno") {
        return <Redirect href="/student" />;
    }

    if (user.tipo === "empresa") {
        return <Redirect href="/company" />;
    }

    if (user.tipo === "investidor") {
        return <Redirect href="/investor" />;
    }

    return null;
}