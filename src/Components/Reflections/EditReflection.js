import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import {editReflection, updateUserReflection} from "../../Actions/UserAction";
import api from "../../Utilites/api";

function EditReflection ({ name, user_id, match, editInfo, editReflection, updateUserReflection, history }) {

    const id = match.params.id;
    const [editData, setEditData] = useState(false);
    const [actID] = useState({
        id: Number(id)
    });
    const [newData, setNewData] = useState({
        reflection: "",
        date: Date.now(),
        user_id: user_id,
        id: id
    });

    useEffect(() => {
        editReflection(name, id)
    },[id]);

    const saveEdit = (e) => {
        e.preventDefault();
        updateUserReflection(name, newData);
        history.push("/AddReflection")
    };

    const edit = refl => {
        setEditData(true);
        setNewData(refl);
    };


    function clickHandler(e) {
        e.preventDefault();
        // api()
        //     .delete(`/api/activity-logs/${name}`, id)
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => {
        //         console.log(err.message)
        //     });
        // history.push("/myactivities")
    }
console.log(newData.reflection);
    console.log(newData);
    return (
        <div>

                    <div>
                        <h1 onClick={() => edit(newData)} >{editInfo}</h1>
                        <button onClick={clickHandler}>Delete Activity</button>
                    </div>

            {editData && (
                <form onSubmit={saveEdit}>
                    <legend>Update Reflection</legend>
                    <label>
                        Reflection -
                        <input
                            onChange={e =>
                                setNewData({ ...newData, reflection: e.target.value })
                            }
                            value={newData.reflection}
                        />
                    </label>
                    <div className="button-row">
                        <button type="submit">save</button>
                        <button onClick={() => setEditData(false)}>cancel</button>
                    </div>
                </form>
            )}
        </div>
    )}

const mapDispatchToProps = {
  editReflection,
  updateUserReflection
};

function mapStateToProps(state) {
    return {
        name: state.username,
        user_id: state.user_id,
        reflection: state.reflections,
        editInfo: state.editReflection.reflection
    }
}



export default connect (
    mapStateToProps,
    mapDispatchToProps)(EditReflection);