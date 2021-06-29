/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//Se encarga del objeto para la conexion a la base de datos
import java.sql.Connection;
import java.sql.DriverManager;
//esta se encarga de poder realizar las sentencias sql como:
//insert, delete, update, create, alter, drop
import java.sql.Statement;
//Esta de encarga de generar un objeto para poder realizar las consultas sql
import java.sql.ResultSet;
import javax.servlet.ServletConfig;
/**
 *
 * @author Lousy
 */
public class Consultar extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    
    //Variables globales
    
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    //Constructor
    public void init(ServletConfig cfg) throws ServletException{
      //como se va a conectar a la base de datos
      String url = "jdbc:mysql:3306//localhost/registro4iv8";
                    //tipodriver:gestorbd:puerto//ip/nombrebd
                    
       String userName = "root";
       String password = "ichlievedish";
       
       
       try{
           
           Class.forName("com.mysql.jdbc.Driver");
           /*
           Aveces el tipo de driver ya tiene un puerto de comunicacion,
           para solucionarlo solo hacemos esto
           url = "jdbc:mysql://localhost/registro4iv8";
           */
           url = "jdbc:mysql://localhost/registro4iv8";
           con = DriverManager.getConnection(url, userName, password);
           set = con.createStatement();
           
           System.out.println("Conexion exitosa");
           
       
           
       }catch(Exception e){
           System.out.println("Conexion no exitosa");
           System.out.println(e.getMessage());
           System.out.println(e.getStackTrace());
           
       }
    }
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Consultar</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Tabla del registro de usuarios</h1>"
                         + "<table border='2'>"
                    + "<thead>"
                    + "<tr>"
                    + "<th>ID</th>"
                    + "<th>Nombre Completo</th>"
                    + "<th>Edad</th>"
                    + "<th>Correo</th>"
                    + "</tr>"
                    + "</thead>"
                    + "<tbody>");
             String nom, appat, apmat, correo,q;
            int edad, id;
            
            q = "select * from mregistro";
            try{
                set = con.createStatement();
                rs = set.executeQuery(q);
                while(rs.next()){
                    id = rs.getInt("id");
                    nom = rs.getString("nombre");
                    appat = rs.getString("appat");
                    apmat = rs.getString("apmat");
                    edad = rs.getInt("edad");
                    correo = rs.getString("correo");
                    out.println( "<tr>"
                                + "<td>"+id+"</td>"
                                + "<td>"+nom+ " "+appat+" "+apmat+"</td>"
                                + "<td>"+edad+"</td>"
                                + "<td>"+correo+"</td>"
                            + "</tr>");
                }
                System.out.println("Consulta Exitosa");
                
                
            }catch(Exception e){
                System.out.println("Error al realizar la consulta");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
    }
            out.println("</tbody>"
                    + "</table>"
                    + "<a href='index.html'>Regresar al menu principal</a>"
                    + "</body>");
            out.println("</html>");
        }
    }
         
    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    
    public void destroy(){
        try{
            con.close();
        }catch(Exception e){
            super.destroy();
        }
    }
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
        

   
