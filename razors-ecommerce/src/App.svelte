<script lang="ts">
  import { Router, Route, Link } from 'svelte-routing'
  import {
    About,
    Checkout,
    Home,
    Login,
    Products,
    ProductsTemplate,
  } from './pages'
  import Nav from './components/Navbar/Nav.svelte'
</script>

<Router>
  <Nav />
  <main>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
    <Route path="/products" component={Products} />
    <Route path="/products/:id" component={ProductsTemplate} />
  </main>
</Router>
