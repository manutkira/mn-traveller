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
                      <div class="border p-3 p-md-5 bg-white rounded shadow">
                          <h2>Coming soon</h2>
                          <form>
                              <div class="form-group">
                                  <label for="emailSignup">Reserve your account now, we'll contact you when it's live</label>
                                  <input id="emailSignup" placeholder="Enter your Email" class="form-control">
                                  <small id="emailHelp" class="form-text text-muted">We'll never share your email address</small>
                              </div>
                                  <button type="submit" class="btn btn-warning mt-3">Join Waiting List</button>
                          </form>
                      </div>
                      <div id="available" class="p-2">
                          <h4 class=" text-center mb-2 mt-3 text-light">
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
              <div class="col-lg-4">
                  <h2>Have any Question?</h2>
                  <p>Contact us by filling out the information below</p>
              <form >
                  <div class="form-group text-left">
                      <input type="email" class="form-control" placeholder="Enter your email">
                      <textarea class="form-control mt-3" placeholder="enter your message" rows="6"></textarea>
                  </div>
                  <button type="submit" class="mt-3 btn btn-warning">Send message</button>
              </form>
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
export default {
    name: 'homepage',
    data(){
        return{
            title: 'MN-Traveller'
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