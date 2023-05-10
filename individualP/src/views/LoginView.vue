<script>
export default {
    name: 'LoginView'
}
</script>

<template>
    <div class="hero min-h-screen bg-base-200 rounded-xl"
        style="background-image: url(https://images.unsplash.com/photo-1625786682948-2168238883d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80);">
        <div class="hero-overlay bg-opacity-20 rounded-xl"></div>
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">


                <h1 class="text-5xl text-neutral-content font-bold">Login now!</h1>
                <p class="py-6  text-neutral-content">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                    excepturi
                    exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" class="input input-bordered" />
                    </div>
                    <div class="form-control mt-6" data-theme="cmyk">
                        <button class="btn btn-primary">Login</button>
                    </div>
                    <label class="label">
                        <a href="#" class="label-text-alt link link-hover">dont have
                            acount?
                            Sign
                            up.</a>
                    </label>
                    <!-- <div class="flex justify-center">
                        <GoogleLogin :callback="googleLogin" />
                    </div> -->
                    <button class="btn bg-green-500 border-0 hover:bg-teal-100">
                        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon"
                            class="Svg-sc-ytk21e-0 gQUQL flex justify-start">
                            <path
                                d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22zm5.045 15.866a.686.686 0 0 1-.943.228c-2.583-1.579-5.834-1.935-9.663-1.06a.686.686 0 0 1-.306-1.337c4.19-.958 7.785-.546 10.684 1.226a.686.686 0 0 1 .228.943zm1.346-2.995a.858.858 0 0 1-1.18.282c-2.956-1.817-7.464-2.344-10.961-1.282a.856.856 0 0 1-1.11-.904.858.858 0 0 1 .611-.737c3.996-1.212 8.962-.625 12.357 1.462a.857.857 0 0 1 .283 1.179zm.116-3.119c-3.546-2.106-9.395-2.3-12.78-1.272a1.029 1.029 0 0 1-.597-1.969c3.886-1.18 10.345-.952 14.427 1.471a1.029 1.029 0 0 1-1.05 1.77z">
                            </path>
                        </svg>
                        <h1 class="text-black font-sans text-xs">Spotify</h1>
                    </button>

                </div>
            </div>
        </div>
    </div>
</template>