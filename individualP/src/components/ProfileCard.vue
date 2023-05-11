<script>
import EmbedPlayer from './EmbedPlayer.vue';
export default {
    name: 'ProfileCard',
    components: {
        EmbedPlayer
    },


}
</script>
<template>
    <div class="grid bg-slate-500 rounded-xl grid-cols-2 h-min">
        <div>


            <div tabindex="0">
                <div class="online avatar">
                    <div class="mask mask-squircle bg-base-content h-24 w-24 bg-opacity-10 p-px m-2"><img
                            src="https://i.scdn.co/image/ab6775700000ee852a796a98ea8432e14e91460a" width="94" height="94"
                            alt="Avatar Tailwind CSS Component" class="mask mask-squircle"></div>
                </div>
            </div>



            <div tabindex="0">
                <div class="text-center">
                    <div class="text-lg font-extrabold">Betsy Braddock</div>
                    <div class="text-base-content/70 my-3 text-sm">Strategic Art Manager
                        <br>
                        Global Illustration Observer
                        <br>
                        Business Alignment Developer
                    </div>
                </div>
            </div>


            <div tabindex="0">
                <div class="mt-2 text-center">
                    <div class="badge badge-ghost">Design</div>
                    <div class="badge badge-ghost">Art</div>
                    <div class="badge badge-ghost">Illustration</div>
                </div>
            </div>
        </div>

        <div>

            <!-- players column -->




        </div>



    </div>
</template>