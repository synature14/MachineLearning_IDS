var brain = require ('brain');
var jsonfile = require('jsonfile');
var net = new brain . NeuralNetwork ();
var data = jsonfile.readFileSync('output.json');
// 일단은 DoS와 Normal 먼저 분류. Probe/R2L/U2R은 나중에...
//back, buffer_overflow, guess password, ipsweep, loadmodule, Neptune, nmap, normal, portsweep, rootkit, satan, smurf, teardrop, warezclient
net . train (data);
console . log (net.run([0.017400676,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0.007827789,0.007827789,0,0,0,0,1,0,0,0.607843137,1,1,0,0.01,0.03,0.01,0,0,0])); //normal (6번째)
console . log (net.run([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.39334638,0.39334638,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0])); //smuf(10번째)
console . log (net.run([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.806262231,0.001956947,0.15,0,0.83,1,0,1,0,1,0.003921569,0,0.96,0,0,0.1,0,0.89,1])); //satan(9번째)
console . log (net.run([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.001956947,0.001956947,0,0,0,0,1,0,0,0.003921569,0.196078431,1,0,1,1,0,0,0,0])); //ipsweep(3번째)
console . log (net.run([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.001956947,0.001956947,0,0,1,1,1,0,0,0.521568627,0.003921569,0.01,0.65,0.64,0,0,0,0.65,1])); //portsweep (7번째)


