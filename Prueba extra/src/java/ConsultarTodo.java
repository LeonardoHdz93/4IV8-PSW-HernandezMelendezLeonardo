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
public class ConsultarTodo extends HttpServlet {

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
        String url = "jdbc:mysql://localhost/pruebaextra";
        String userName = "root";
        String password = "ichlievedish";
        try{
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection(url, userName, password);
            set = con.createStatement();
            System.out.println("Conexion Exitosa");
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
            out.println("<title>Servlet Consultar Todo</title>"
                    + "<link rel=\"stylesheet\" href=\"./css/style.css\">");            
            out.println("</head>");
            out.println("<body class='tabla a mostrar'>");
            out.println("<h1>Tabla del registro de usuarios</h1>"
                         + "<table border='2'>"
                    + "<thead>"
                    + "<tr>"
                    + "<th>Nombre</th>"
                    + "<th>Contrasena</th>"
                    + "<th>Puesto</th>"
                    + "<th>Sueldo</th>"
                    + "</tr>"
                    + "</thead>"
                    + "<tbody>");
            String nombre,contrasena,puesto,q;
            int sueldo;
            q = "select * from datos";
            try{
                set = con.createStatement();
                rs = set.executeQuery(q);
                while(rs.next()){
                    nombre = rs.getString("nombre");
                    contrasena = rs.getString("contrasena");
                    puesto = rs.getString("puesto");
                    sueldo = rs.getInt("sueldo");
                    out.println( "<tr>"
                                + "<td>"+nombre+"</td>"
                                + "<td>"+contrasena+"</td>"
                                + "<td>"+puesto+"</td>"
                                + "<td>"+sueldo+"</td>"
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
                    + "<a class='boton' href='index.html'>Regresar al menu principal</a>"
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
