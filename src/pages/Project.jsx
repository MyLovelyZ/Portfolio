import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Project() {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-200">
            <Navbar />

            <main className="mx-auto max-w-5xl px-6 py-12">
                <h1 className="text-3xl font-bold mb-4">My Projects</h1>
                <p className="text-lg">
                    Here are some of the projects I've worked on:
                </p>
            </main>

            <Footer />
        </div>
    );
}