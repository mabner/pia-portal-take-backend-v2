const passport = require( 'passport' );
const GitHubStrategy = require( 'passport-github2' ).Strategy;


passport.serializeUser( function ( user, done )
{
	done( null, user );
} );

passport.deserializeUser( function ( user, done )
{
	done( null, user );
} );

passport.use(
	new GitHubStrategy(
		{
			clientID: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			callbackURL: process.env.GITHUB_CALLBACK_URL,
		},
		function ( accessToken, refreshToken, profile, done )
		{

			process.nextTick( function ()
			{
				return done( null, profile );
			} );
		},
	),
);
