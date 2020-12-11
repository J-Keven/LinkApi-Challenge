interface IXML {
  salesman_name: string;
  code: number;
  description: string;
  unit_value: number;
  cliente_name: string;
  cliente_email: string;
  products_qtd: number;
}

function xml({
  code,
  salesman_name,
  description,
  products_qtd,
  unit_value,
  cliente_name,
  cliente_email,
}: IXML): string {
  return `
  <?xml version="1.0" encoding="ISO-8859-1"?>
    <pedido>
      <vendedor>${salesman_name}</vendedor>
      <cliente>
          <nome>${cliente_name}</nome>
          <email>${cliente_email}</email>
      </cliente>
      <transporte>
        <volume>
          <servico>Internet</servico>
        </volume>
      </transporte>
      <itens>
          <item>
              <codigo>${code}</codigo>  
              <descricao>${description}</descricao>
              <qtde>${products_qtd}</qtde>
              <vlr_unit>${unit_value}</vlr_unit>
          </item>
      </itens>
    </pedido>
  `;
}

export default xml;
