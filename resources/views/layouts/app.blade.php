<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <div class="container-flui">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    @guest
                    <a class="navbar-brand" href="{{ url('') }}">LARAVEL - REACT_JS</a>
                    @else
                    <a class="navbar-brand" href="{{ route('admin') }}">LARAVEL - REACT_JS</a>
                    @endguest
                  <div class="collapse navbar-collapse" id="navbarNav">
                    
                  </div>
                </div>
                
                <form class="container-fluid justify-content-end">
                        @guest
                        <button class="btn btn-success me-2" type="button">
                            <a class="link-warning link" href="{{ route('login') }} " style="text-decoration: none">Đăng Nhập</a>
                        </button>
                        <button class="btn btn-sm btn-secondary" type="button">
                            <a class="link-warning" href="{{ route('register') }} " style="text-decoration: none">Đăng Ký</a>
                        </button>
                        @else
                        <button class="btn btn-success me-2" type="button" id="login-name">
                            {{ Auth::user()->name }}
                        </button>
                        <button class="btn btn-sm btn-secondary" type="button">
                            <a class="link-warning" href="{{ route('logout') }} " style="text-decoration: none">Đăng Xuất</a>
                        </button>
                        @endguest
                    </a>
                  </form>
              </nav>
    
        </div>

        <main>
            @yield('content')
        </main>
    </div>
</body>
</html>
