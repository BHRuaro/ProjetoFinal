export const headerComponent = `<header class="fixed-top">
<div class="header container-fluid d-none d-sm-block">
  <div class="text-center">
    <p>Atendimento: Seg. a Sex. 8h às 18h / Tel: +55 46 99999-0000</p>
  </div>
</div>
<nav class="navbar bg-light">
  <div class="d-inline-flex justify-content-between w-100">
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header nav-item">
        <a class="offcanvas-title nav-link" id="offcanvasNavbarLabel" href="index.html"><img src="img/Nexus.png"
            alt="Logo" class="logo"></a>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item d-block d-sm-none d-flex w-auto border border-2 rounded-3">
            <input class="form-control border-0" type="search" placeholder="pesquise aqui..." aria-label="Search">
            <button class="btn btn-primary border rounded-3" type="submit"><i
                class="fa-solid fa-magnifying-glass"></i></button>
          </li>
          <li class="nav-item d-block d-sm-none">
            <a class="nav-link active" href="#">Meu cadastro</a>
          </li>
          <li class="nav-item d-block d-sm-none">
            <a class="nav-link active" href="#">Favoritos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Promoções</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Notebooks</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Linha Desktop</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Linha Gamer</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Periféricos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Hardware</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Política e Privacidade</a>
          </li>
          <li class="nav-item d-block d-sm-none fixed-bottom ms-4 mb-3">
            <p>Atendimento: Seg. a Sex. 8h às 18h</p>
            <p>Tel: +55 46 99999-0000</p>
          </li>
      </div>
    </div>

    <div class="d-flex align-items-center w-100 ms-lg-4">
      <a class="navbar-brand position-absolute" href="index.html"><img src="img/Nexus.png" alt="Logo"
          class="logo"></a>
    </div>
    <div>
      <ul class="navbar-nav d-flex flex-row me-lg-4">
        <li class="d-none d-sm-block">
          <input type="text" class="search-click me-3 bg-light" name="" placeholder="pesquise aqui..." />
        </li>
        <li class="nav-item me-3 d-none d-sm-block">
          <a class="nav-link" href="#"><i class="fas fa-heart fa-2x text-black"></i></a>
        </li>
        <li class="nav-item me-3">
          <a class="nav-link" href="#"><i class="fas fa-shopping-cart fa-2x text-black"></i></a>
        </li>
        <li class="nav-item me-3 d-none d-sm-block">
          <a class="nav-link" href="#" role="button" id="dropdownMenuLink" data-mdb-toggle="dropdown"
            aria-expanded="false"><i class="fas fa-user fa-2x text-black"></i></a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">Entrar</a></li>
            <li><a class="dropdown-item" href="cadastro.html">Registrar-se</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>`;