import React, { useState, useEffect } from "react";
import Navbarhome from "../components/Navbarhome";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isLogin, setAuthentication } from "../utils/auth";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "" });
  const [quiz, getQuiz] = useState([]);

  useEffect(() => {
    const authenticate = async () => {
      const loggedIn = await isLogin();
      console.log(loggedIn);

      if (loggedIn.auth) {
        setUser(loggedIn.data);
        toast.success("Welcome To Dashboard");
        try {
          const response = await axios.get(
            `http://localhost:4001/quiz/${loggedIn.data._id}`
          );
          console.log(response.data); // Log the response data, not user
          getQuiz(response.data);
        } catch (error) {
          toast.error("Error");
          console.error("error while fetching quiz:", error);
        }
      } else {
        navigate("/");
      }
    };
    authenticate();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbarhome />
      <ToastContainer />
      <div className="p-4 text-2xl font-semibold text-center">
        Hi {user.name}, Welcome to Your Dashboard!
      </div>
      <div className="container mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {quiz.map((thisquiz) => (
          <div
            key={thisquiz._id}
            className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-neutral-700"
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                {thisquiz.quizname}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {thisquiz.description}
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-neutral-800">
              <div className="flex justify-between">
                <Link
                  to={`/quiz/view/${thisquiz._id}`}
                  className="text-center bg-purple-500 text-white py-2 w-1/2 rounded-md hover:bg-purple-700 transition duration-300"
                >
                  View
                </Link>
                <Link
                  to={`/delete-quiz/${thisquiz._id}`}
                  className="text-center bg-red-500 text-white py-2 w-1/2 rounded-md hover:bg-red-700 transition duration-300"
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
