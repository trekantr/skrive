import colors from 'colors';
import notifier from 'node-notifier';
import path from 'path';

// Error handler for gulp-plumber
const errorHandler = error => {

  const date = new Date();
  const cwd = process.cwd();

  const now = date.toTimeString().split( ' ' )[0];

  const title = error.name + ' in ' + error.plugin;

  const shortMessage = error.message.split( '\n' )[ 0 ];

  const message = '[' + colors.grey( now ) + '] ' +
    [ title.bold.red, '', error.message, '' ].join( '\n' );

  // Print message to console
  // eslint-disable-next-line
  console.log(message);

  notifier.notify( {
    title:   title,
    message: shortMessage,
    icon:    path.join( cwd, 'tools/icons/error.svg' ),
  } );

  if ( this ){
    this.emit( 'end' );
  }
};

module.exports = errorHandler;
