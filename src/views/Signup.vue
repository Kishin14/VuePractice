<template>
  <b-container>
      <b-form-input placeholder="Enter yout name" v-model="inpName"></b-form-input>
      <b-button class="mt-3" @click="register()" variant="info">Register</b-button>
      <hr>
      <b-alert class="w-75 d-inline-block" variant="success" show>
          <b-list-group id="usersList">
              <b-list-group-item v-for="userID in usersID" :key="userID.id">User ID: {{userID}}</b-list-group-item>
              <b-list-group-item v-for="userData in usersData" :key="userData.name">User Name: {{userData.name}}</b-list-group-item>
          </b-list-group>
      </b-alert>
      <hr>
      <b-button @click="deleteAllUsers()" variant="outline-danger" block>Delete all users.</b-button>
  </b-container>
</template>

<script>
import {db} from '../main'
export default {
    data() {
        return {
            inpName: '',
            msj: 'xd',
            users: [
            {
                name: 'pepito'
            },
            {
                name:'Luh'
            }
            ],
            usersID: [],
            usersData: []
        }
    },
    created () {
        this.showAllUsers();
    },
    mounted() {
        //this.msj = '123'
        
        this.bringUsersData();
    },
    methods: {
        register() {            
            db.collection('users')
                .add({
                    name: this.inpName
                })
                .then(function() {
                    console.log('Se pudo')
                })
                .catch(function() {
                    console.log('No se pudo')
                });
        },
        showAllUsers() {        
            db.collection('users')
                .onSnapshot((querySnapshot) => {
                  //let usersQuery = [];
                  querySnapshot.forEach((doc) => {
                      console.log(doc.id);
                      this.usersID.push(doc.id)
                      return doc;
                  })                  
                });
        },
        bringUsersData() {
            db.collection('users')
                .onSnapshot((querySnapshot) => {
                  //let usersQuery = [];
                  querySnapshot.forEach((doc) => {
                      console.log(doc.data());
                      this.usersData.push(doc.data())
                      return doc.data();
                  })                  
                });
        },
        deleteAllUsers() {
            this.usersID.forEach((usersID) => {
                db.collection('users').doc(usersID).delete()
                    .then(()=> {
                        console.log('Se han borrado los usuarios')
                    })
                    .catch(() => {
                        console.log('Error al borrar los usuarios')
                    });    
            });
            
        }
    }
}
</script>

<style>

</style>