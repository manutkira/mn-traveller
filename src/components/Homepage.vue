<template>
  <div class="container-fluid m-0 p-0">
      <div id="home-page" class="full-height p-4">
          <div class="container pt-3">
              <div class="row pb-5">
                  <div class="col-lg-6 pt-4 my-auto">
                      <div class="text-center mb-3 d-block d-lg-none">
                          <h1 class="display-3">{{title}}</h1>
                          <h3 class="">The world is our home.</h3>
                      </div>
                      <img id="iphone-img" src="../assets/travelTreasuryiPhone.png" alt="" class="img-fluid">
                  </div>
                  <div class="col-lg-6 pt-4">
                      <div class="text-center mb-3 d-none d-lg-block">
                          <h1 class="display-3">{{title}}</h1>
                          <h3 class="">The world is our home.</h3>
                      </div>
                      <div class=" p-3 p-md-5 bg-white rounded shadow nes-container">
                          <h2>Coming soon</h2>
                          <form @submit.prevent="signUp(email)" class="">
                              <div class="form-group">
                                  <label for="emailSignup">Reserve your account now, we'll contact you when it's live</label>
                                  <input id="emailSignup" 
                                  type="email"
                                  v-model="email" placeholder="Enter your Email" class="form-control mb-3">
                                  <small id="emailHelp" class="form-text text-muted ">We'll never share your email address</small>
                              </div>
                                  <button  type="submit" class="nes-btn is-warning mt-4 mb-0">Join Waiting List</button>
                                  <div class="mt-3">{{message}}</div>
                          </form>
                      </div>
                      <div id="available" class="p-2">
                          <h4 class=" text-center mb-2 mt-5 text-light nes-btn is-primary">
                              Available on
                          </h4>
                          <div class="row">
                              <div class="col my-auto">
                                  <img src="../assets/apple.png" class="float-right img-fluid app_store_img" alt="">
                              </div>
                              <div class="col my-auto">
                                  <img src="../assets/google.png" class="float-left img-fluid app_store_img" alt="">
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div id="about" class="bg-light p-md-5 p-4">
          <div class="row">
              <div class="col-lg">
                  <img src="../assets/icon/1284743134.svg" height="120" class="m-4" alt="">
                  <h5 class="ml-md-4 mr-md-4">
                      Plan your next adventure by setting a daily spending budget. We make it easy to break your expenses down by category, giving you more time to plan the important things.
                  </h5>
              </div>
              <div class="col-lg">
                  <img src="../assets/icon/Piggy-Bank.svg" height="120" class="m-4" alt="">
                  <h5 class="ml-md-4 mr-md-4">
                      Use the app to track how much money you've saved towards your trips total budgeted goal. know exactly how much more you need to save, and how much time you have left to save.
                  </h5>
              </div>
              <div class="col-lg">
                  <img src="../assets/icon/openpassport.svg" height="120" class="m-4" alt="">
                  <h5 class="ml-md-4 mr-md-4">
                      When the day of your trip comes, have the peace of mind that you planned out your expenses. Never worry about money on a trip again.
                  </h5>
              </div>
          </div>

      </div>
      <div id="cantact" class="bg-info p-4">
          <div class="row justify-content-center mt-3 mb-3">
              <div v-if="showContact" class="col-lg-4">
                  <h2>Have any Question?</h2>
                  <p>Contact us by filling out the information below</p>
              
              <div v-if="contactNotice != ''" class="alert alert-warning">
                  There was a problem submitting your message. "{{contactNotice}}"
              </div>

              <form @submit.prevent="sendContactMessage()">
                  <div class="form-group text-left">
                      <input
                        type="email"
                        v-model="contactEmail"
                        class="form-control"
                        placeholder="Enter your email">
                      <textarea
                        class="form-control mt-3"
                        v-model="contactMessage"
                        placeholder="enter your message"
                        rows="6"></textarea>
                  </div>
                  <button type="submit" class="mt-3 nes-btn is-warning">Send message</button>
              </form>
              </div>
              <div v-else>
                  <h3>Message is send successfully!</h3>
                  <p>Thank you for contacting us, we'll get back to you as soon as possible.</p>
              </div>
          </div>
      </div>
      <div id="footer" class=" p-4">
          <footer class="text-light p-4">
              <a href="#" target="_blank" class="text-warning">Build this app</a> | <a href="#" class="text-warning">Privacy Policy</a>
              <br>
              <small>&copy; 2021, MN-Traveller</small>
          </footer>
      </div>
  </div>
</template>

<script>
import {firebaseAuth} from '../firebase/firebaseInit'
export default {
    name: 'homepage',
    data(){
        return{
            title: 'MN-Traveller',
            email: '',
            message: '',
            showContact: true,
            contactEmail: '',
            contactMessage: '',
            contactNotice: '',
        }
    },
    methods: {
        sendContactMessage(){
            if(!this.validEmail(this.contactEmail)){
                this.contactNotice = 'The email address is badly formatted!'
            }else if(this.contactMessage.length < 10){
                this.contactNotice = 'Your message is too short!'
            }else{
                const url = `https://us-central1-mn-traveller.cloudfunctions.net/sendEmail?emailFrom=${this.contactEmail}&message=${this.contactMessage}`
                const requestOption = {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'}
                }
                fetch(url)
                this.showContact = false
            }
        },
        validEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        async signUp(email){
            let noticeMessage = 'Your account has been reserved'
            await firebaseAuth.createUserWithEmailAndPassword(email, this.randomPassword(15)).catch(err => {
                noticeMessage = err.message
                })
                this.message = noticeMessage
            this.email = ''
        },
        randomPassword(length){
            let chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+<>ABCDEFGHIJKLMNOPQRSTUVWXYZ123546789"
            let password = ''
            for (let x = 0; x < length; x++){
                let i = Math.floor(Math.random() * chars.length);
                password += chars.charAt(i);
            }
           return password
        }
    }
}
</script>

<style>

#home-page{
    background-color: #92d2f2;
    background-image: url('../assets/river-6519572.jpg') ;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
}

#about{
    min-height: 40vh;
}

#iphone-img{
    max-height: 80vh;
}

#footer{
    background-color: black;
}

.app_store_img{
    max-height: 80px;
}
</style>