
import AspectRatio from '@mui/joy/AspectRatio';
// import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

export default function FAQCard() {
  return (

    <>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        background: "green"
      }}>
        <Card
      size="lg"
      variant="plain"
      orientation="horizontal"
      
      sx={{
        textAlign: 'center',
        maxWidth: '100%',
        width: 750,
        mt: 5,
        // to make the demo resizable
        resize: 'horizontal',
        overflow: 'auto',
        backgroundColor: 'black'
      }}
    >
      <CardOverflow
        variant="solid"
        color="primary"
        sx={{
          flex: '0 0 300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: 'var(--Card-padding)',
          
        }}
      >

        <img
          alt="Logo FollowSat-1"
          src="/Users/franciscochimbo/Desktop/SpaceProgram/satellite-tracking-frontend/src/assets/img/logo4.jpeg" />

        <Typography textColor="primary.200">
          Platzi Space Program
        </Typography>
      </CardOverflow>

      <CardContent sx={{
        gap: 1.5,
        minWidth: 200,    
      }}>
        
      <CardContent>


          <Typography level="h2" fontSize="xl4" sx={{
            letterSpacing: 2, 
            color: 'white'
          }}>
            Project
          </Typography>

          <Typography fontSize="sm" sx={{
            mt: 5,
            letterSpacing: 2, 
            color: 'white'
          }}>
            ¿Alguna vez has soñado con seguir la pista de los fascinantes satélites mientras se deslizan a través del vasto lienzo del cielo nocturno?
          </Typography>

          <Typography fontSize="sm" sx={{
            mt: 5,
            letterSpacing: 2, 
            color: 'white'
          }}>
            ¡Prepárate para una experiencia estelar con nuestra asombrosa aplicación de rastreo satelital!
          </Typography>
          <Typography fontSize="sm" sx={{
            mt: 5,
            letterSpacing: 2, 
            color: 'white'
          }}>
            Diseñada especialmente para jóvenes profesionales en desarrollo web como tú, nuestra plataforma te brindará una visión sin precedentes del espacio exterior, con un mapa interactivo que te permitirá seguir el trayecto en tiempo real de estos ingenios tecnológicos.
          </Typography>
        </CardContent>
        {/* <Button
      variant="outlined"
      color="primary"
      sx={{
        '--variant-borderWidth': '2px',
        borderRadius: 40,
        borderColor: 'primary.500',
        mx: 'auto',
      }}
    >
      See FAQ
    </Button> */}
      </CardContent>
        </Card>
      </div>
      
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        background: "pink"
      }}>
        <Card
      size="lg"
      variant="plain"
      orientation="horizontal"
      sx={{
        textAlign: 'center',
        maxWidth: '100%',
        width: 500,
        // to make the demo resizable
        resize: 'horizontal',
        overflow: 'auto',
        backgroundColor: 'black',
        mt: 2.5
      }}
    >
        <CardContent sx={{
          gap: 1.5,
          minWidth: '100%',
        }}>

          <Typography level="h2" fontSize="xl3" sx={{
            letterSpacing: 2, 
            color: 'white'
          }}>
            Un Paseo Cósmico a tu Alcance
          </Typography>

          <Typography fontSize="sm" sx={{
            mt: 0.5,
            letterSpacing: 2, 
            color: 'white'
          }}>

            Con nuestra aplicación, embarcarte en un viaje a través del universo nunca ha sido tan emocionante. 

            Imagina tener acceso a información actualizada sobre la ubicación y la trayectoria de cientos de satélites que orbitan la Tierra. 
          </Typography>
          <Typography fontSize="sm" sx={{
            mt: 0.5,
            letterSpacing: 2, 
            color: 'white'
          }}> 
            ¿Quieres saber dónde se encuentra el telescopio espacial más famoso? ¿O tal vez rastrear un misterioso satélite de comunicaciones? 

            Nuestra aplicación hace que este sueño sea una realidad, brindándote un pasaporte al cosmos directamente en tu dispositivo.
          </Typography>
          
        </CardContent>
      </Card>
      </div>
    </>
    
  );
}
