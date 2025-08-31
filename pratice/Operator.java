import java.util.*;
public class Operator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        sc.nextLine();

        int b = sc.nextInt();
        sc.nextLine();
        int c = sc.nextInt();
        sc.nextLine();
        char e = sc.nextLine();
        int d = sc.nextInt();
        System.out.println(a);
        if (a>b){
            if(a>c){
                if(a>d){
                    System.out.println(a);
                }
                else{
                    System.out.println(d);
                }
            }
        }
        else if(b>c){
            if(b>d){
                System.out.println(b);
            }
            else{
                System.out.println(d);
            }
            
        }
        else{
            if (c>d){
                System.out.println(c);
            }
            else{
                System.out.println(d);
            }
        }
    }
}

