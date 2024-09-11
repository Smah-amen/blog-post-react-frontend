import React from "react";
import "./Post.css";
import { FiEdit } from "react-icons/fi";
import { FaTrashCan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


function Posts({ id, title, image, description, handleDelete, postUserId }) {
    const navigate = useNavigate();
    const handleEditClick = () => {
        navigate("/formEdit", { state: { id, title, description, image } });
    };

    return (
        // <div className="col">
        //     <div className="card " >
        //         <div className="card-img-top img-cont">
        //             <img src={image} alt="Post" className="post-image" />
        //         </div>
        //         <div className="card-body d-flex flex-column row-gap-4">
        //           <h2 className="post-title">{title}</h2>
        //             <p className="post-description">{description}</p>
                    
        //             {postUserId === sessionStorage.getItem("id") && (
        //                 <div className="buttons-wrapper mt-auto">
        //                     <button
        //                         className="edit btn btn-dark"
        //                         onClick={handleEditClick}
        //                     >
        //                         <FiEdit />
        //                     </button>
        //                     <button
        //                         className="delete btn btn-outline-dark"
        //                         onClick={handleDelete}
        //                     >
        //                         <FaTrashCan />
        //                     </button>
        //                 </div>
        //             )}
        //         </div>
        //     </div>
        // </div>
        <div className="col-md-4 mb-5">  
    <div className="card h-100"> 
        <div className="card-img-top img-cont">
            <img src={image} alt="Post" className="post-image" />
        </div>
        <div className="card-body d-flex flex-column p-3">
            <h2 className="post-title">{title}</h2>
            <p className="post-description">{description}</p>
            
            {postUserId === sessionStorage.getItem("id") && (
                <div className="buttons-wrapper mt-auto ">
                    <button
                        className="edit btn btn-dark"
                        onClick={handleEditClick}
                    >
                        <FiEdit />
                    </button>
                    <button
                        className="delete btn btn-outline-dark"
                        onClick={() => handleDelete(id)}
                    >
                        <FaTrashCan />
                    </button>
                </div>
            )}
        </div>
    </div>
</div>

    );
}

export default Posts;
