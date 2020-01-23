function employeeHTML (contructorArray) {
    console.log("id",contructorArray[0].id);
return
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="../style.css">

</head>

<body>
    <div class="jumbotron text-center bg-danger text-white">
        <h1>My Team</h1>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <div class="card shadow rounded mb-5 text-white">
                    <div class="card-header bg-primary">Name</div>
                    <div class="card-body">
                        <ul class='list-group text-dark'>
                            <li class = "list-group-item">
                                id: ${contructorArray[0].id}
                            </li>
                            <li class = "list-group-item">
                                email: ${contructorArray[0].email}
                            </li>
                            <li class = "list-group-item">
                                name: ${contructorArray[0].name}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card shadow rounded mb-5 text-white">
                    <div class="card-header bg-primary">name</div>
                    <div class="card-body">More data</div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card shadow rounded mb-5 text-white">
                    <div class="card-header bg-primary">Name</div>
                    <div class="card-body">More data</div>
                </div>
            </div>
        </div>

        <div class="row mt-5 text-center">

            <div class="col-sm-12">

                <div class="row left">
                    <div class="col-sm-4">
                        <div class="card shadow rounded mb-5 text-white">
                            <div class="card-header bg-primary">

                            </div>
                            <div class="card-body">

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">

                        <div class="card shadow rounded mb-5 text-white">
                            <div class="card-header bg-primary">

                            </div>
                            <div class="card-body">

                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>

    </div>
</body>

</html>`
}



module.exports = employeeHTML;