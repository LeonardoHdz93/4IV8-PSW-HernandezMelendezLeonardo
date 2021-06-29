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
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;
import javax.servlet.ServletConfig;

/**
 *
 * @author Lousy
 */
public class Altas extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
   private Connection con;
   private Statement set;
   private ResultSet rs;
   public void init(ServletConfig cfg) throws ServletException{
       String url = "jdbc:mysql:3306//localhost/pruebaextra"; //datos para inicio de sesion en la base de datos
       String userName = "root";
       String password = "ichlievedish";
       try{
           Class.forName("com.mysql.jdbc.Driver");
           url = "jdbc:mysql://localhost/pruebaextra";
           con = DriverManager.getConnection(url,userName, password);
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
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            String nombre,contrasena,puesto;
            int sueldo;
            //Obtenggo el valor de los inputs
            nombre = request.getParameter("nombre");
            contrasena = request.getParameter("contrasena");
            puesto = request.getParameter("puesto");
            sueldo = Integer.parseInt(request.getParameter("sueldo"));
            try{
                //Registro los datos en la tabla de la base de datos
              String q = "insert into datos"
                      + "(nombre,contrasena,puesto,sueldo)"
                      + "values"
                      + "('"+nombre+"','"+contrasena+"','"+puesto+"',"+sueldo+")";
              set.executeUpdate(q);
                System.out.println("Registro Exitoso");
                
             out.println("<!DOCTYPE html>"
                     + "<html>"
                     + "<head>"
                     + "<title>Registro Exitoso</title>"
                     + "<link rel='stylesheet' href='./css/style.css'>"
                     + "</head>"
                     + "<body>"
                     + "<div class='contenedor'>"
                     + "<h1 class='registro'>Registro Exitoso</h1>"
                     + "<a class='boton' href='index.html'>Regresar al menu principal</a>"
                     + "</div>"
                     + "</body>"
                     + "</html>");
            }catch(Exception e){
                System.out.println("Error al registrar en la tabla");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
                out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Altas</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Error al registrar en la tabla</h1>");
            out.println(e.getMessage());
            out.println(e.getStackTrace());
            out.println("</body>");
            out.println("</html>");
            } //catch
            
        }
    }//trows

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
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}//Class Atlas
