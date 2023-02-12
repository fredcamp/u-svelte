<script lang="ts">
  import { Router, Route } from 'svelte-routing'
  import {
    About,
    Checkout,
    Home,
    Login,
    Products,
    ProductsTemplate,
    PageNotFound,
  } from './pages'
  import Nav from './components/Navbar/Nav.svelte'
  import Footer from './components/Footer.svelte'
  import Alert from './components/Alert.svelte'
  import alert from './stores/alert'
</script>

<Router>
  <Nav />
  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/login" component={Login} />
  <Route path="/products" component={Products} />
  <Route path="/products/:id" component={ProductsTemplate} />
  <Route path="/checkout" component={Checkout} />
  <Route component={PageNotFound} />
  {#if $alert.show}
    <Alert />
  {/if}
</Router>
<Footer />
