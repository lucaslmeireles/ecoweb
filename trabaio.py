from numpy import matrix,linalg
import numpy as np
t=0
x=0
n=0
k=0
err_t =1
err_x =1
err_n =1

while (k < 5): #Condição de parada apos 5 iterações 
  k1 = k+1
  t1 = (2*x-n+9)/5 #expressoes para o calculo de X1
  x1 = (-t1+n-3)/2 # X2, o t1 é usado aqui por se tratar do calculo de Seidel, onde os numeros calculados já entram no calculo
  n1 = (t1+x1+6)/3 # e X3
  err_t =np.abs(t1 - t) # É calculado tambem o erro
  err_x = np.abs(x1 - x)
  err_n = np.abs(n1 - n)
  k= k1 #No final do loop os valores calculados entram no lugar dos antigos 
  t = t1
  x = x1
  n = n1

  print(f"K:{k}, X1:{t}, X2:{x}, X3:{n}")