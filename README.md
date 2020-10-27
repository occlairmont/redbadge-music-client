# Red Vinyl

### The app for lottery lovers! The Daily Lotto will generate a set of 6 random numbers to be used on your next lottery ticket (Mega Millions, Powerball, Hoosier Lottery) then you can store those numbers and ticket info in your account.

## Created by Game of Threads:

- Mitchell -- github.com/MitchReed123
- Mizue -- github.com/mobara121
- Brittany -- github.com/bmagee2

## App Features

### Users:

    - Create a personalized user account
    - Reset username/password
    - Generate set of 6 random numbers to be used when purchasing a lottery ticket
    - Log generated numbers and lottery ticket info in account
    - Update and delete logged info
    - Search places to buy lottery tickets in central Indianapolis on location menu or Google Maps
    - Add a lottery location to menu if not listed

### Admins:

    - Create, update or delete Daily Lotto users and lottery locations

## App Endpoints

### Users: ~/user

        POST /signup        => Registers new user account
        POST /AdminSignUp   => Admin account added
        POST /login         => Logs in a user
        GET /               => Gets all users for Admin
        UPDATE/:id          => Admin & User can update user info
        DELETE/:id          => Admin & User can delete user profile

### Lottos: ~/lotto

        GET/            => Gets all lotto info
        POST/           => Inputs new data to DB
        GET/:id         => Gets an individual input by ID
        PUT/:id         => Updates a specific item in the DB by ID
        DELETE/:id      => Deletes a specific item in the DB by ID

### Destinations: ~/destination

        GET/            => Shows all the destinations available to on DB
        POST/           => Allows a user to post a new location that the Admin then can Delete/Update
        GET/:id         => Pulls specific Destinations to view
        PUT/:id         => Allows the Admin user to update/fix a location that was submitted to the table
        DELETE/:id      => Allows the Admin user to delete a location that is on the DB
