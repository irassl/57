import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import redirect from "react-router-dom/Redirect";
import Login from "../Login/Login";
import {Redirect} from "react-router-dom";
import {useFormik} from "formik";
import {updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />  );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} /> );
    let newMessageBody = state.newMessageBody;



    // if(!props.isAuth ){
    //     return <Redirect to={'/login'}/>
    // }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <AddMessageForm />
            </div>
        </div>
    )
}
const AddMessageForm=(props)=>{
    const formik = useFormik({
        initialValues: {
            newMessageBody: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values.newMessageBody));
            props.sendMessage(values.newMessageBody)
            formik.resetForm()
        },
    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <div><textarea value={props.newMessageBody}

                           placeholder='Enter your message'
                           {...formik.getFieldProps('newMessageBody')}></textarea></div>
            <div><button type={'submit'} >Send</button></div>
        </form>
    )
}

export default Dialogs;