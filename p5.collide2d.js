/*
Repositório: https://github.com/bmoren/p5.collide2D/
Criado por http://benmoren.com
Algumas funções e versão modificada do código de http://www.jeffreythompson.org/colllision-detection
Versão v0.7.3 | 22 de junho de 2020
CC BY-NC-SA 4.0
*/




p5 . protótipo . _collideDebug  =  false ;

p5 . protótipo . CollideDebug  =  function ( debugMode ) {
    _collideDebug  =  debugMode ;
}

/*~++~+~+~++~+~++~++~+~+~ 2D ~+~+~++~+~++~+~+~+~+~+~+ ~+~+~+~+*/

p5 . protótipo . CollideRectRect  =  function  ( x ,  y ,  w ,  h ,  x2 ,  y2 ,  w2 ,  h2 )  {
  //2d
  //adiciona algo para detectar rectMode CENTER
  if  ( x  +  w  >=  x2  &&     // r1 borda direita após r2 esquerda
      x  <=  x2  +  w2  &&     // r1 borda esquerda após r2 direita
      y  +  h  >=  y2  &&     // r1 borda superior após r2 inferior
      y  <=  y2  +  h2 )  {     // r1 borda inferior após r2 superior
        retorna  verdadeiro ;
  }
  retornar  falso ;
} ;

// versão p5.vector de CollideRectRect
p5 . protótipo . CollideRectRectVector  =  function ( p1 ,  sz ,  p2 ,  sz2 ) {
  retorne  p5 . protótipo . CollideRectRect ( p1.x , p1.y ,  sz.x , sz.y ,  p2.x , p2.y ,  sz2.x , sz2.y ) _ _  _ _ _ _ _ _ _ _ _ _ _ _ _ _  
}


p5 . protótipo . colideRectCircle  =  function  ( rx ,  ry ,  rw ,  rh ,  cx ,  cy ,  diâmetro )  {
  //2d
  // variáveis ​​temporárias para definir arestas para teste
  var  testeX  =  cx ;
  var  testeY  =  cy ;

  // qual aresta está mais próxima?
  if  ( cx  <  rx ) {          testX  =  rx        // borda esquerda
  } else  if  ( cx  >  rx + rw ) {  testX  =  rx + rw   }    // borda direita

  if  ( cy  <  ry ) {          testY  =  ry        // borda superior
  } else  if  ( cy  >  ry + rh ) {  testY  =  ry + rh  }    // borda inferior

  // // obtém distância das arestas mais próximas
  var  distância  =  this . dist ( cx , cy , testX , testY )

  // se a distância for menor que o raio, colisão!
  if  ( distância  <=  diâmetro / 2 )  {
    retorna  verdadeiro ;
  }
  retornar  falso ;
} ;

// versão p5.vector do CollideRectCircle
p5 . protótipo . CollideRectCircleVector  =  function ( r ,  sz ,  c ,  diâmetro ) {
  retorne  p5 . protótipo . CollideRectCircle ( r . x , r . y ,  sz . x , sz . y ,  c . x , c . y ,  diâmetro )
}

p5 . protótipo . colideCircleCircle  =  function  ( x ,  y , d ,  x2 ,  y2 ,  d2 )  {
//2d
  if (  this . dist ( x , y , x2 , y2 )  <=  ( d / 2 ) + ( d2 / 2 )  ) {
    retorna  verdadeiro ;
  }
  retornar  falso ;
} ;


// versão p5.vector de CollideCircleCircle
p5 . protótipo . CollideCircleCircleVector  =  function ( p1 , d ,  p2 ,  d2 ) {
  retorne  p5 . protótipo . CollideCircleCircle ( p1 . x , p1 . y ,   d ,  p2 . x , p2 . y ,  d2 )
}


p5 . protótipo . CollidePointCircle  =  function  ( x ,  y ,  cx ,  cy ,  d )  {
//2d
if (  this . dist ( x , y , cx , cy )  <=  d / 2  ) {
  retorna  verdadeiro ;
}
retornar  falso ;
} ;

// versão p5.vector do CollidePointCircle
p5 . protótipo . CollidePointCircleVector  =  function ( p ,  c ,  d ) {
  retorne  p5 . protótipo . CollidePointCircle ( p . x , p . y , c . x , c . y ,   d )
}

p5 . protótipo . CollidePointEllipse  =  function  ( x ,  y ,  cx ,  cy ,  dx ,  dy )  {
  //2d
  var  rx  =  dx / 2 ,  ry  =  dy / 2 ;
  // Descartando os pontos fora da caixa delimitadora
  if  ( x  >  cx  +  rx  ||  x  <  cx  -  rx  || y  >  cy  +  ry  ||  y  <  cy  -  ry )  {
		retornar  falso ;
  }
  // Compara o ponto com seu equivalente na elipse
  var  xx  =  x  -  cx ,  yy  =  y  -  cy ;
  var  ey  =  ry  *  this . sqrt ( this . abs ( rx  *  rx  -  xx  *  xx ) )  /  rx ;
  return  aa  <=  ey  &&  aa  >=  - ey ;
} ;

// versão p5.vector do CollidePointEllipse
p5 . protótipo . CollidePointEllipseVector  =  function ( p ,  c ,  d ) {
  retorne  p5 . protótipo . CollidePointEllipse ( p . x , p.y , c.x , c.y , d.x , d.y ) ; _ _ _ _ _ _ _ _ _ _
}

p5 . protótipo . CollidePointRect  =  function  ( pontoX ,  pontoY ,  x ,  y ,  xW ,  yW )  {
//2d
if  ( pointX  >=  x  &&          // direito da borda esquerda AND
    pointX  <=  x  +  xW  &&     // esquerda da borda direita AND
    pointY  >=  y  &&          // abaixo do topo AND
    pointY  <=  y  +  yW )  {     // acima do fundo
        retorna  verdadeiro ;
}
retornar  falso ;
} ;

// versão p5.vector de CollidePointRect
p5 . protótipo . CollidePointRectVector  =  function ( ponto ,  p1 ,  sz ) {
  retorne  p5 . protótipo . CollidePointRect ( ponto . x ,  ponto . y ,  p1 . x ,  p1 . y ,  sz . x ,  sz . y ) ;
}

p5 . protótipo . CollidePointLine  =  function ( px , py , x1 , y1 , x2 , y2 ,  buffer ) {
  // obtém distância do ponto até as duas extremidades da linha
var  d1  =  este . dist ( px , py ,  x1 , y1 ) ;
var  d2  =  este . dist ( px , py ,  x2 , y2 ) ;

// obtém o comprimento da linha
var  lineLen  =  this . dist ( x1 , y1 ,  x2 , y2 ) ;

// como os floats são tão minuciosamente precisos, adicione uma pequena zona de buffer que dará colisão
if  ( buffer  ===  undefined ) {  buffer  =  0.1 ;  }    // maior # = menos preciso

// se as duas distâncias forem iguais ao comprimento da linha, o ponto está na linha!
// note que usamos o buffer aqui para fornecer um intervalo, em vez de um #
if  ( d1 + d2  >=  lineLen - buffer  &&  d1 + d2  <=  lineLen + buffer )  {
  retorna  verdadeiro ;
}
retornar  falso ;
}

// versão p5.vector do CollidePointLine
p5 . protótipo . CollidePointLineVector  =  function ( ponto , p1 , p2 ,  buffer ) {
  retorne  p5 . protótipo . CollidePointLine ( ponto . x , ponto . y ,  p1 . x , p1 . y ,  p2 . x , p2 . y ,  buffer ) ;
}

p5 . protótipo . CollideLineCircle  =  function (  x1 ,   y1 ,   x2 ,   y2 ,   cx ,   cy ,   diâmetro )  {
  // uma das extremidades está DENTRO do círculo?
  // se sim, retorna true imediatamente
  var  dentro1  =  this . CollidePointCircle ( x1 , y1 ,  cx , cy , diâmetro ) ;
  var  dentro2  =  this . CollidePointCircle ( x2 , y2 ,  cx , cy , diâmetro ) ;
  if  ( inside1  ||  inside2 )  return  true ;

  // obtém o comprimento da linha
  var  distX  =  x1  -  x2 ;
  var  distY  =  y1  -  y2 ;
  var  len  =  this . sqrt (  ( distX * distX )  +  ( distY * distY )  ) ;

  // obtém o produto escalar da linha e do círculo
  var  ponto  =  (  ( ( cx - x1 ) * ( x2 - x1 ) )  +  ( ( cy - y1 ) * ( y2 - y1 ) )  )  /  this . pow ( len , 2 ) ;

  // encontra o ponto mais próximo na linha
  var  mais próximoX  =  x1  +  ( ponto  *  ( x2 - x1 ) ) ;
  var  mais próximoY  =  y1  +  ( ponto  *  ( y2 - y1 ) ) ;

  // este ponto está realmente no segmento de linha?
  // se sim continua, mas se não, retorna false
  var  onSegment  =  this . CollidePointLine ( proximoX , mais próximoY , x1 , y1 , x2 , y2 ) ;
  if  ( ! onSegment )  return  false ;

  // desenha um círculo de depuração no ponto mais próximo da linha
  if ( this . _collideDebug ) {
    isso . elipse ( mais próximoX ,  mais próximoY , 10 , 10 ) ;
  }

  // obtém a distância até o ponto mais próximo
  distX  =  mais próximoX  -  cx ;
  distY  =  mais próximoY  -  cy ;
  var  distância  =  this . sqrt (  ( distX * distX )  +  ( distY * distY )  ) ;

  if  ( distância  <=  diâmetro / 2 )  {
    retorna  verdadeiro ;
  }
  retornar  falso ;
}

// versão p5.vector do CollideLineCircle
p5 . protótipo . CollideLineCircleVector  =  function (  p1 ,   p2 ,   c ,   diâmetro ) {
  retorne  p5 . protótipo . colideLineCircle (  p1.x , p1.y ,   p2.x , p2.y ,   c.x , c.y ,   diâmetro ) ; _ _ _ _   _ _ _ _   _ _ _ _  
}
p5 . protótipo . CollideLineLine  =  function ( x1 ,  y1 ,  x2 ,  y2 ,  x3 ,  y3 ,  x4 ,  y4 , calcIntersection )  {

  var  interseção ;

  // calcula a distância até o ponto de interseção
  var  uA  =  ( ( x4 - x3 ) * ( y1 - y3 )  -  ( y4 - y3 ) * ( x1 - x3 ) )  /  ( ( y4 - y3 ) * ( x2 - x1 )  -  ( x4 - x3 ) * ( y2 -y1 ) ) ; _
  var  uB  =  ( ( x2 - x1 ) * ( y1 - y3 )  -  ( y2 - y1 ) * ( x1 - x3 ) )  /  ( ( y4 - y3 ) * ( x2 - x1 )  -  ( x4 - x3 ) * ( y2 -y1 ) ) ; _

  // se uA e uB estiverem entre 0-1, as linhas estão colidindo
  if  ( uA  >=  0  &&  uA  <=  1  &&  uB  >=  0  &&  uB  <=  1 )  {

    if ( this . _collideDebug  ||  calcIntersection ) {
      // calcula o ponto onde as linhas se encontram
      var  interseçãoX  =  x1  +  ( uA  *  ( x2 - x1 ) ) ;
      var  interseçãoY  =  y1  +  ( uA  *  ( y2 - y1 ) ) ;
    }

    if ( this . _collideDebug ) {
      isso . elipse ( interseçãoX , interseçãoY , 10 , 10 ) ;
    }

    if ( calcIntersection ) {
      interseção  =  {
        "x" : interseção X ,
        "y" : interseçãoY
      }
       interseção de retorno ;
    } senão {
      retorna  verdadeiro ;
    }
  }
  if ( calcIntersection ) {
    interseção  =  {
      "x" : falso ,
      "y" : falso
    }
     interseção de retorno ;
  }
  retornar  falso ;
}


// versão p5.vector de CollideLineLine
p5 . protótipo . CollideLineLineVector  =  function ( p1 ,  p2 ,  p3 ,  p4 ,  calcIntersection ) {
  retorne  p5 . protótipo . CollideLineLine ( p1.x , p1.y ,  p2.x , p2.y ,  p3.x , p3.y ,  p4.x , p4.y ,  calcIntersection ) ; _ _  _ _ _ _  _ _ _ _  _ _ _ _  _ _
}

p5 . protótipo . CollideLineRect  =  function ( x1 ,  y1 ,  x2 ,  y2 ,  rx ,  ry ,  rw ,  rh ,  calcIntersection )  {

  // verifica se a linha atingiu algum dos lados do retângulo. usa a função CollideLineLine acima
  var  esquerda ,  direita ,  superior ,  inferior ,  interseção ;

  if ( calcIntersection ) {
     esquerda  =    isso . CollideLineLine ( x1 , y1 , x2 , y2 ,  rx , ry , rx ,  ry + rh , true ) ;
     certo  =   isso . CollideLineLine ( x1 , y1 , x2 , y2 ,  rx + rw , ry ,  rx + rw , ry + rh , true ) ;
     topo  =     isso . CollideLineLine ( x1 , y1 , x2 , y2 ,  rx , ry ,  rx + rw , ry , true ) ;
     inferior  =  este . CollideLineLine ( x1 , y1 , x2 , y2 ,  rx , ry + rh ,  rx + rw , ry + rh , true ) ;
     interseção  =  {
        "esquerda" : esquerda ,
        "certo" : certo ,
        "topo" : topo ,
        "inferior" : inferior
    }
  } senão {
    //retorna booleanos
     esquerda  =    isso . CollideLineLine ( x1 , y1 , x2 , y2 ,  rx , ry , rx ,  ry + rh ) ;
     certo  =   isso . CollideLineLine ( x1 , y1 , x2 , y2 ,  rx + rw , ry ,  rx + rw , ry + rh ) ;
     topo  =     isso . CollideLineLine ( x1 , y1 , x2 , y2 ,  rx , ry ,  rx + rw , ry ) ;
     inferior  =  este . CollideLineLine ( x1 , y1 , x2 , y2 ,  rx , ry + rh ,  rx + rw , ry + rh ) ;
  }

  // se QUALQUER um dos itens acima for verdadeiro, a linha atingiu o retângulo
  if  ( esquerda  ||  direita  ||  superior  ||  inferior )  {
    if ( calcIntersection ) {
       interseção de retorno ;
    }
    retorna  verdadeiro ;
  }
  retornar  falso ;
}

// versão p5.vector de CollideLineRect
p5 . protótipo . CollideLineRectVector  =  function ( p1 ,  p2 ,  r ,  rsz ,  calcIntersection ) {
  retorne  p5 . protótipo . CollideLineRect ( p1.x , p1.y ,  p2.x , p2.y ,  r.x , r.y ,  rsz.x , rsz.y ,  calcIntersection ) ; _ _  _ _ _ _  _ _ _ _  _ _ _ _  _ _
}

p5 . protótipo . CollidePointPoly  =  function ( px ,  py ,  vértices )  {
  var  colisão  =  false ;

  // passa por cada um dos vértices, mais o próximo vértice da lista
  var  seguinte  =  0 ;
  for  ( var  atual = 0 ;  atual < vértices . comprimento ;  atual ++ )  {

    // pega o próximo vértice na lista se chegamos ao final, volta para 0
    próximo  =  atual + 1 ;
    if  ( next  ===  vértices . length )  next  =  0 ;

    // obtém os PVectors em nossa posição atual, isso torna nossa instrução if um pouco mais limpa
    var  vc  =  vértices [ atual ] ;     // c para "atual"
    var  vn  =  vértices [ próximo ] ;        // n para "próximo"

    // compara a posição, inverte a variável 'colision' para frente e para trás
    if  ( ( ( ( vc . y  >=  py  &&  vn . y  <  py )  ||  ( vc . y  <  py  &&  vn . y  >=  py ) )  &&
         ( px  <  ( vn . x - vc . x ) * ( py - vc . y )  /  ( vn . y - vc . y ) + vc . x ) )  {
            colisão  =  ! colisão ;
    }
  }
   colisão de retorno ;
}

// versão p5.vector do CollidePointPoly
p5 . protótipo . CollidePointPolyVector  =  function ( p1 ,  vértices ) {
  retorne  p5 . protótipo . CollidePointPoly ( p1.x , p1.y ,  vértices ) ; _ _ _ _ 
}

// POLÍGONO/CÍRCULO
p5 . protótipo . colideCirclePoly  =  function ( cx ,  cy ,  diâmetro ,  vértices ,  interior )  {

  if  ( interior  ===  indefinido ) {
    interior  =  falso ;
  }

  // passa por cada um dos vértices, mais o próximo vértice da lista
  var  seguinte  =  0 ;
  for  ( var  atual = 0 ;  atual < vértices . comprimento ;  atual ++ )  {

    // pega o próximo vértice na lista se chegamos ao final, volta para 0
    próximo  =  atual + 1 ;
    if  ( next  ===  vértices . length )  next  =  0 ;

    // obtém os PVectors em nossa posição atual, isso torna nossa instrução if um pouco mais limpa
    var  vc  =  vértices [ atual ] ;     // c para "atual"
    var  vn  =  vértices [ próximo ] ;        // n para "próximo"

    // verifica a colisão entre o círculo e uma linha formada entre os dois vértices
    var  colisão  =  this . CollideLineCircle ( v.x , vc.y , vn.x , vn.y ,  cx , cy , diâmetro ) ; _ _ _ _ _ _ _ _ 
    if  ( colisão )  return  true ;
  }

  // testa se o centro do círculo está dentro do polígono
  if ( interior  ===  true ) {
    var  centerInside  =  this . CollidePointPoly ( cx , cy ,  vértices ) ;
    if  ( centerInside )  return  true ;
  }

  // caso contrário, depois de tudo isso, retorna false
  retornar  falso ;
}

// versão p5.vector do CollideCirclePoly
p5 . protótipo . CollideCirclePolyVector  =  function ( c ,  diâmetro ,  vértices ,  interior ) {
  retorne  p5 . protótipo . colideCirclePoly ( c.x , c.y ,  diâmetro , vértices , interior ) ; _ _ _ _   
}

p5 . protótipo . CollideRectPoly  =  function (  rx ,  ry ,  rw ,  rh ,  vértices ,  interior )  {
  if  ( interior  ==  indefinido ) {
    interior  =  falso ;
  }

  // passa por cada um dos vértices, mais o próximo vértice da lista
  var  seguinte  =  0 ;
  for  ( var  atual = 0 ;  atual < vértices . comprimento ;  atual ++ )  {

    // pega o próximo vértice na lista se chegamos ao final, volta para 0
    próximo  =  atual + 1 ;
    if  ( next  ===  vértices . length )  next  =  0 ;

    // obtém os PVectors em nossa posição atual, isso torna nossa instrução if um pouco mais limpa
    var  vc  =  vértices [ atual ] ;     // c para "atual"
    var  vn  =  vértices [ próximo ] ;        // n para "próximo"

    // verifica todos os quatro lados do retângulo
    var  colisão  =  this . CollideLineRect ( v.x , vc.y , vn.x , vn.y , rx , ry , rw , rh ) ; _ _ _ _ _ _ _ _ 
    if  ( colisão )  return  true ;

    // opcional: teste se o retângulo está DENTRO do polígono observe que isso itera todos os lados do polígono novamente, então use isso apenas se precisar
    if ( interior  ===  true ) {
      var  dentro  =  this . CollidePointPoly ( rx , ry ,  vértices ) ;
      if  ( dentro )  return  true ;
    }
  }

  retornar  falso ;
}

// versão p5.vector de CollideRectPoly
p5 . protótipo . CollideRectPolyVector  =  function ( r ,  rsz ,  vértices ,  interior ) {
  retorne  p5 . protótipo . CollideRectPoly ( r.x , r.y ,  rsz.x , rsz.y ,  vértices , interior ) ; _ _ _ _  _ _ _ _  
}

p5 . protótipo . colideLinePoly  =  function ( x1 ,  y1 ,  x2 ,  y2 ,  vértices )  {

  // passa por cada um dos vértices, mais o próximo vértice da lista
  var  seguinte  =  0 ;
  for  ( var  atual = 0 ;  atual < vértices . comprimento ;  atual ++ )  {

    // pega o próximo vértice na lista se chegamos ao final, volta para 0
    próximo  =  atual + 1 ;
    if  ( next  ===  vértices . length )  next  =  0 ;

    // obtém os PVectors em nossa posição atual extrai as coordenadas X/Y de cada
    var  x3  =  vértices [ atual ] . x ;
    var  y3  =  vértices [ atual ] . e ;
    var  x4  =  vértices [ próximo ] . x ;
    var  y4  =  vértices [ próximo ] . e ;

    // faz uma comparação de linha/linha se true, retorna 'true' imediatamente e para de testar (mais rápido)
    var  hit  =  this . CollideLineLine ( x1 ,  y1 ,  x2 ,  y2 ,  x3 ,  y3 ,  x4 ,  y4 ) ;
    se  ( bater )  {
      retorna  verdadeiro ;
    }
  }
  // nunca foi atingido
  retornar  falso ;
}


// versão p5.vector do CollideLinePoly
p5 . protótipo . CollideLinePolyVector  =  function ( p1 ,  p2 ,  vértice ) {
  retorne  p5 . protótipo . colideLinePoly ( p1.x , p1.y ,  p2.x , p2.y ,  vértice ) ; _ _ _ _  _ _ _ _ 
}

p5 . protótipo . colidePolyPoly  =  function ( p1 ,  p2 ,  interior )  {
  if  ( interior  ===  indefinido ) {
    interior  =  falso ;
  }

  // passa por cada um dos vértices, mais o próximo vértice da lista
  var  seguinte  =  0 ;
  for  ( var  atual = 0 ;  atual < p1 . comprimento ;  atual ++ )  {

    // pega o próximo vértice na lista, se chegarmos ao final, volta para 0
    próximo  =  atual + 1 ;
    if  ( next  ===  p1 . comprimento )  next  =  0 ;

    // obtém os PVectors em nossa posição atual, isso torna nossa instrução if um pouco mais limpa
    var  vc  =  p1 [ atual ] ;     // c para "atual"
    var  vn  =  p1 [ próximo ] ;        // n para "próximo"

    //usar esses dois pontos (uma linha) para comparar com os vértices do outro polígono usando polyLine()
    var  colisão  =  this . CollideLinePoly ( v.x , vc.y , vn.x , vn.y , p2 ) ; _ _ _ _ _ _ _ _
    if  ( colisão )  return  true ;

    //verifica se um dos polígonos está DENTRO do outro
    if ( interior  ===  true ) {
      colisão  =  isso . CollidePointPoly ( p2 [ 0 ] .x , p2 [ 0 ] .y , p1 ) ; _ _  
      if  ( colisão )  return  true ;
      colisão  =  isso . CollidePointPoly ( p1 [ 0 ] .x , p1 [ 0 ] .y , p2 ) ; _ _  
      if  ( colisão )  return  true ;
    }
  }

  retornar  falso ;
}

p5 . protótipo . CollidePolyPolyVector  =  function ( p1 ,  p2 ,  interior )  {
  retorne  p5 . protótipo . colidePolyPoly ( p1 ,  p2 ,  interior ) ;
}

p5 . protótipo . CollidePointTriangle  =  function ( px ,  py ,  x1 ,  y1 ,  x2 ,  y2 ,  x3 ,  y3 )  {

  // obtém a área do triângulo
  var  areaOrig  =  this . abs (  ( x2 - x1 ) * ( y3 - y1 )  -  ( x3 - x1 ) * ( y2 - y1 )  ) ;

  // obtém a área de 3 triângulos feitos entre o ponto e os cantos do triângulo
  var  area1  =     this . abs (  ( x1 - px ) * ( y2 - py )  -  ( x2 - px ) * ( y1 - py )  ) ;
  var  area2  =     this . abs (  ( x2 - px ) * ( y3 - py )  -  ( x3 - px ) * ( y2 - py )  ) ;
  var  area3  =     this . abs (  ( x3 - px ) * ( y1 - py )  -  ( x1 - px ) * ( y3 - py )  ) ;

  // se a soma das três áreas for igual ao original, estamos dentro do triângulo!
  if  ( area1  +  area2  +  area3  ===  areaOrig )  {
    retorna  verdadeiro ;
  }
  retornar  falso ;
}

// versão p5.vector do CollidePointTriangle
p5 . protótipo . CollidePointTriangleVector  =  function ( p ,  p1 ,  p2 ,  p3 ) {
  retorne  p5 . protótipo . CollidePointTriangle ( p.x , p.y ,  p1.x , p1.y ,  p2.x , p2.y ,  p3.x , p3.y ) ; _  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _   
}

p5 . protótipo . CollidePointPoint  =  function  ( x , y , x2 , y2 ,  buffer )  {
    if ( buffer  ===  indefinido ) {
      buffer  =  0 ;
    }

    if ( this . dist ( x , y , x2 , y2 )  <=  buffer ) {
      retorna  verdadeiro ;
    }

  retornar  falso ;
} ;

// versão p5.vector do CollidePointPoint
p5 . protótipo . CollidePointPointVector  =  function ( p1 ,  p2 ,  buffer ) {
  retorne  p5 . protótipo . CollidePointPoint ( p1.x , p1.y , p2.x , p2.y , buffer ) ; _ _ _ _ _ _ _ _ 
}

p5 . protótipo . colidePointArc  =  function ( px ,  py ,  ax ,  ay ,  arcRadius ,  arcHeading ,  arcAngle ,  buffer )  {

  if  ( buffer  ===  indefinido )  {
    buffer  =  0 ;
  }
  // ponto
  var  ponto  =  this . createVector ( px ,  py ) ;
  // ponto central do arco
  var  arcoPos  =  this . createVector ( ax ,  ay ) ;
  // vetor do raio do arco
  var  raio  =  this . createVector ( arcRadius ,  0 ) . girar ( arcHeading ) ;

  var  pontoParaArc  =  ponto . copiar ( ) . sub ( arcPos ) ;

  if  ( ponto . dist ( arcPos )  <=  ( arcRadius  +  buffer ) )  {
    var  ponto  =  raio . ponto ( pointToArc ) ;
    var  ângulo  =  raio . angleBetween ( pointToArc ) ;
    if  ( ponto  >  0  &&  ângulo  <=  arcAngle  /  2  &&  angle  >=  - arcAngle  /  2 )  {
      retorna  verdadeiro ;
    }
  }
  retornar  falso ;
}

// versão p5.vector do CollidePointArc
p5 . protótipo . CollidePointArcVector  =  function ( p1 ,  a ,  arcRadius ,  arcHeading ,  arcAngle ,  buffer ) {
  retorne  p5 . protótipo . CollidePointArc ( p1.x , p1.y ,  a.x , a.y ,  arcRadius , arcHeading , arcAngle , buffer ) ; _ _ _ _ _ _ _ _     
}
