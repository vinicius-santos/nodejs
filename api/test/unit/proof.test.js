var validProof,
    validProofUpdateDelete = require('../helpers/validation');
    

    module.exports = function(){
shouldNotReturnError: function(test){
        this.caio.transferir(100.00, this.joao);
        test.equal(this.caio.dinheiro, 100.00);
        test.equal(this.joao.dinheiro, 200.00);
        test.done();
      }
    };
    