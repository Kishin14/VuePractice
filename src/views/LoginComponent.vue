<template>
    <b-container class="bg-dark p-3 w-75">
        <b-alert class="alert-link" show>User Login</b-alert>
            <div class="d-flex justify-content-center my-3">
                <b-avatar variant="danger" icon="people-fill" class="mr-2"></b-avatar>
                <b-form-input placeholder="Enter your username" class="w-50 text-center"></b-form-input>            
            </div>
            <div class="d-flex justify-content-center my-3">
                <b-avatar variant="success" icon="lock" class="mr-2"></b-avatar>
                <b-form-input placeholder="Enter your password" class="w-50 text-center"></b-form-input>
            </div>
            <hr>            
            <b-button variant="success" class="mx-2"><router-link class="text-white" to="/userscreen">Login</router-link></b-button>
            <b-button variant="warning" class="mx-2"><router-link class="text-white" to="/signup">Sign up</router-link></b-button>
    </b-container>
        
    
</template>

<script>
import {db} from '../main';
export default {
    mounted() {
        this.getUsers();
    },
    methods: {
        async getUsers() {
            try {
                const snapshot = await db.collection('users').get();
                //const users = [];

                snapshot.forEach(doc => {
                    console.log(doc.data().name);
                })
                
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style scoped>

</style>

