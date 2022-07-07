<template>
    <nav class="sticky top-0">
		<div class=" flex justify-between items-center px-36 h-20 bg-emerald-100  shadow-md mb-10 sm:px-10">
            <div>
                <p class="font-pacifico text-3xl">YourChoice</p>
            </div>
            <div class="">
                <ul>
                    <li class="inline-block mx-5 cursor-pointer font-bold hover:text-gray-600  sm:hidden md:hidden"><router-link to="/productdetail">Home</router-link></li>
                    <li class="inline-block mx-5 cursor-pointer hover:text-gray-600 font-bold  sm:hidden md:hidden"><a>Shop</a></li>
                    <li class="inline-block mx-5 cursor-pointer font-bold hover:text-gray-600  sm:hidden md:hidden"><a>About</a></li>
                    <li class="inline-block mx-5 cursor-pointer font-bold hover:text-gray-600  sm:hidden md:hidden" ><a>Contact</a></li>
                    <li class="inline-block mx-5 cursor-pointer font-bold text-white bg-black hover:bg-gray-700 px-12 py-2  sm:hidden md:hidden" ><a>Sign Up</a></li>
                    <li class="inline-block mx-5 cursor-pointer text-white font-bold bg-black hover:bg-gray-700 px-12 py-2  sm:hidden md:hidden" ><a>LogIn</a></li>
                </ul>
            </div>
        </div>
	</nav>
</template>
<script>
export default {
    name: 'NavBar',
}
</script>
