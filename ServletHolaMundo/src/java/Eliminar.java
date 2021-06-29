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
public class Eliminar extends HttpServlet {

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
            throws ServletException, IOException {}

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
        processRequest(request, response);
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
         response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Eliminar</title>");            
            out.println("</head>");
            out.println("<body>");
            int id;
            
            id = Integer.parseInt(request.getParameter("ideliminar"));
            String q = "delete from mregistro where id = " +id;
            try{
                set.executeUpdate(q);
                out.println("<h1>Usuario Eliminado</h1>");
                System.out.println("Registro Eliminado");
            }catch(Exception e){
                out.println("<h1>Usuario No Eliminado, ocurrio un error</h1>");
                System.out.println("Error al eliminar el registro"
                        + "<a href='index.html'>Regresar al menu principal</a>");
            }
            out.println("<a href='index.html'>Regresar al menu principal</a>");
            out.println("</body>");
            out.println("</html>");
        }
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
