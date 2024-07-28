import React from "react";
import "./TaskNav.css";

const TaskNav = () => {
    return (
        <section className="task-nav-container">
            <h2>Task Navigation Component</h2>
            <nav>
                <ul className="task-nav">
                    <li className="special-li"><a className="new-task" href="#new-task">+ New Task</a></li>
                    <li><a href="#today">Today</a></li>
                    <li><a href="#pending">Pending</a></li>
                    <li><a href="#completed">Completed</a></li>
                    <li><a href="#all-tasks">All Tasks</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default TaskNav;