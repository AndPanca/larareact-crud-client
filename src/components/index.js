import React, {Component} from 'react';
import axios from "axios";
import Navbar from "./Navbar";
import Form from "./Form";
import IdentitasList from "./IdentitasList";
import Loader from "./Loader";
import {format} from "date-fns";

class Home extends Component{
    // Menampung data state dari API URL
    state = {
        identitas: [],
        identitasId: {},
        loader: false,
        url: "http://127.0.0.1:8000/api/identitas"
    };

    // Ambil data untuk disimpan di identitas
    getIdentitas = async () => {
        this.setState({ loader: true });
        //GET API Identitas Full
        const identitas = await axios.get(this.state.url);
        this.setState({ identitas: identitas.data, loader: false });
    };

    createIdentitas = async data => {
        this.setState({ loader:true });
        //POST API create identitas
        await axios.post(this.state.url,{
            id: data.id,
            name: data.name,
            birthday: format(data.birthday, "yyyy-MM-dd"),
            gender: data.gender,
            email: data.email,
            phone: data.phone,
            address: data.address
        });
        /*.then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error.response)
        });*/
        this.getIdentitas();
    };

    editIdentitas = async data => {
        //Membersihkan objek identitas sebelumnya
        this.setState({ identitasId: {}, loader: true });
        //PUT API Edit
        await axios.put(`${this.state.url}/${data.id}`, {
            id: data.id,
            name: data.name,
            birthday: data.birthday,
            gender: data.gender,
            email: data.email,
            phone: data.phone,
            address: data.address
        });
        this.getIdentitas();
    };

    deleteIdentitas = async id => {
        this.setState({loader: true});
        //Delete API by ID
        await axios.delete(`${this.state.url}/${id}`);
        this.getIdentitas();
    };

    //Mount Data dari getIdentitas
    componentDidMount(){
        this.getIdentitas();
    }

    //Mengambil data yang akan di edit
    onEdit = (data) => {
        this.setState({identitasId : data});
    };

    //Mengambil ID identitas yang akan didelete, selanjutnya Request ke Axios deleteIdentitas
    onDelete = (id) => {
        this.deleteIdentitas(id);
    };
    
    onFormSubmit = data => {
        if (data.isEdit){
            //Jika data diedit
            this.editIdentitas(data);
        }else{
            // Jika data tidak di edit
            this.createIdentitas(data);
        }
    };

    render() {
        return (
            <div>
                <Navbar/>
                <Form 
                    identitasId={this.state.identitasId}
                    onFormSubmit={this.onFormSubmit}
                />
                {/* Melempar data state ke IdentitasList dan melempar delete (ID) */}
                <IdentitasList 
                    identitas={this.state.identitas} 
                    onDelete={this.onDelete} //Memanggil fungsi onDelete
                    onEdit={this.onEdit} //Memanggil fungsi edit
                />
                {this.state.loader ? <Loader/> : ""}
            </div>
        );
    }
}

export default Home;
